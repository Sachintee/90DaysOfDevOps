          const express = require("express");
const mysql = require("mysql2/promise");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const dbConfig = {
    host: process.env.DB_HOST || "mysql",
    user: process.env.DB_USER || "appuser",
    password: process.env.DB_PASSWORD || "apppassword",
    database: process.env.DB_NAME || "taskdb"
};

async function initializeDatabase(retries = 10) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            console.log(`Connecting to MySQL... attempt ${attempt}/${retries}`);

            const connection = await mysql.createConnection(dbConfig);

            await connection.execute(`
                CREATE TABLE IF NOT EXISTS tasks (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    title VARCHAR(255) NOT NULL,
                    completed BOOLEAN DEFAULT FALSE,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            `);

            await connection.end();

            console.log("Database initialized successfully");
            return;
        } catch (error) {
            console.log(`MySQL connection failed: ${error.code}`);

            if (attempt === retries) {
                throw error;
            }

            console.log("Retrying in 3 seconds...");

            await new Promise(resolve => setTimeout(resolve, 3000));
        }
    }
}

app.get("/", (req, res) => {
    res.json({
        message: "Day 36 Docker Project",
        status: "running"
    });
});

app.get("/health", async (req, res) => {
    try {
        const connection = await mysql.createConnection(dbConfig);
        await connection.query("SELECT 1");
        await connection.end();

        res.json({
            status: "healthy",
            database: "connected"
        });
    } catch (error) {
        res.status(503).json({
            status: "unhealthy",
            database: "disconnected"
        });
    }
});

app.get("/tasks", async (req, res) => {
    try {
        const connection = await mysql.createConnection(dbConfig);

        const [rows] = await connection.execute(
            "SELECT * FROM tasks ORDER BY id DESC"
        );

        await connection.end();

        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Database error" });
    }
});

app.post("/tasks", async (req, res) => {
    try {
        const { title } = req.body;

        if (!title) {
            return res.status(400).json({
                error: "Title is required"
            });
        }

        const connection = await mysql.createConnection(dbConfig);

        const [result] = await connection.execute(
            "INSERT INTO tasks (title) VALUES (?)",
            [title]
        );

        await connection.end();

        res.status(201).json({
            id: result.insertId,
            title,
            completed: false
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Database error" });
    }
});

initializeDatabase()
    .then(() => {
        app.listen(PORT, "0.0.0.0", () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Database initialization failed:", error);
        process.exit(1);
    });