package main

import (
	"fmt"
	"net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "Hello from Day 35 - Multi-Stage Docker Build!")
}

func main() {
	http.HandleFunc("/", handler)

	fmt.Println("Server running on port 8080")
	http.ListenAndServe(":8080", nil)
}