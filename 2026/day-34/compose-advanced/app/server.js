const express = require("express");
const mysql = require("mysql2/promise");
const { createClient } = require("redis");

const app = express();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

const redis = createClient({
  url: `redis://${process.env.REDIS_HOST}:6379`
});

redis.on("error", err => console.log("Redis Error:", err));

async function start() {
  await redis.connect();

  app.get("/", async (req, res) => {
    const [rows] = await db.query("SELECT NOW() AS time");

    await redis.set("last_request", new Date().toISOString());

    res.json({
      message: "Day 34 Docker Compose App",
      database: rows[0].time,
      redis: "Connected"
    });
  });

  app.listen(3000, () => {
    console.log("App running on port 3000");
  });
}

start();