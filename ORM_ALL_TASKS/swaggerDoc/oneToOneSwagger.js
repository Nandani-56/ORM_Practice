/**
 * @swagger
 * /one-to-one-insert:
 *   post:
 *     summary: Insert data into table having one to one realtionship
 *     tags: [One to One Relation]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               countryName:
 *                 type: string
 *                 example: India
 *               capitalName:
 *                 type: string
 *                 example: New Delhi
 *     responses:
 *       200:
 *         description: data inserted sucessfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 responseCode:
 *                   type: integer
 *                   example: 200
 *                 responseMessage:
 *                    type: string
 *                    example: data inserted sucessfully
 *                 responseData:
 *                   type: object
 *       500:
 *         description: data insertion failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 responsecode:
 *                   type: integer
 *                 responseMessage:
 *                    type: string
 */

/**
 * @swagger
 * /one-to-one-read:
 *   get:
 *     summary: list country-capital data
 *     tags: [One to One Relation]
 *     responses:
 *       200:
 *         description: list country-capital data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 responseCode:
 *                   type: integer
 *                   example: 200
 *                 responseMessage:
 *                    type: string
 *                    example: list country-capital data sucessfully
 *                 responseData:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: 1
 *                     countryName:
 *                       type: string
 *                       example: India
 *                     capitalName:
 *                       type: string
 *                       example: New Delhi
 *       500:
 *         description: list country-capital data failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 responsecode:
 *                   type: integer
 *                 responseMessage:
 *                   type: string
 */
