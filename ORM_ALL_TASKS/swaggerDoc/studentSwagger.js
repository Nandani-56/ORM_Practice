/**
 * @swagger
 * /insertStudentData:
 *   post:
 *     summary: Insert student data
 *     tags: [authUser]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: abc
 *               lastName:
 *                 type: string
 *                 example: xyz
 *               age:
 *                 type: integer
 *                 example: 20
 *               contactNumber:
 *                 type: string
 *                 example: 2020202020
 *     responses:
 *       200:
 *         description: Student data inserted sucessfully
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
 *                    example: signup sucessfully
 *                 responseData:
 *                   type: object
 *                   properties:
 *                     loginToken:
 *                       type: string
 *                       example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MjE1Y2I3NjAxZDg2OTJhZjkzMGVkMTkiLCJhY3Rpb24iOiJhY2Nlc3MiLCJpYXQiOjE2NDU1OTc4MTksImV4cCI6MTY0NTY0MTAxOX0.Zve63LUqIOh3lwhBfgQLbVE73PgbaY0tCPQ7y2vQVsk
 *       500:
 *         description: signup failed
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
