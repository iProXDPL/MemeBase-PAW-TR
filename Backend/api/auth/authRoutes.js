/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Rejestracja, logowanie i użytkownicy
 */

const express = require("express");
const router = express.Router();
const { register, login, user, getUsers } = require("./authController");

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Rejestracja nowego użytkownika
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Użytkownik zarejestrowany i zwrócony token
 *       400:
 *         description: Użytkownik lub email już istnieje
 */
router.post("/register", register);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Logowanie użytkownika
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Zalogowano pomyślnie, zwrócono token i dane użytkownika
 *       400:
 *         description: Nieprawidłowe dane logowania
 */
router.post("/login", login);

/**
 * @swagger
 * /api/auth/user:
 *   get:
 *     summary: Pobierz aktualnie zalogowanego użytkownika
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Zwraca dane zalogowanego użytkownika
 *       401:
 *         description: Brak autoryzacji lub nieprawidłowy token
 */
router.get("/user", user);

/**
 * @swagger
 * /api/auth/users:
 *   get:
 *     summary: Pobierz użytkowników (wszyscy, po id lub username)
 *     tags: [Auth]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         description: ID użytkownika
 *       - in: query
 *         name: username
 *         schema:
 *           type: string
 *         description: Nazwa użytkownika
 *     responses:
 *       200:
 *         description: Lista użytkowników lub pojedynczy użytkownik
 *       404:
 *         description: Nie znaleziono użytkownika(ów)
 */
router.get("/users", getUsers);

module.exports = router;
