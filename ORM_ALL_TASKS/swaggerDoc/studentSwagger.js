// insert student data

/**
 * @swagger
 * /insertStudentData:
 *   post:
 *     summary: Insert student data
 *     tags: [Student Table]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
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

// display student data

/**
 * @swagger
 * /displayStudentData:
 *   get:
 *     summary: list student data
 *     tags: [Student Table]
 *     responses:
 *       200:
 *         description: list student data
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
 *                    example: listed student data sucessfully
 *                 responseData:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: 1
 *                     firstName:
 *                       type: string
 *                       example: abc
 *                     lastName:
 *                       type: string
 *                       example: abc
 *                     age:
 *                       type: integer
 *                       example: 20
 *                     contactNumber:
 *                       type: string
 *                       example: 2020202020
 *       500:
 *         description: list student data failed
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

// delete student data

/**
 * @swagger
 * /deleteStudentData/{id}:
 *   delete:
 *     summary: Delete Student Data
 *     tags: [Student Table]
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        default: 1
 *     responses:
 *       200:
 *         description:  student data deleted sucessfully
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
 *                    example:  student data deleted sucessfully
 *       500:
 *         description:  student data delete failed
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

// Update student data

/**
 * @swagger
 * /updateStudentData/{id}:
 *   put:
 *     summary: update student data
 *     tags: [Student Table]
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        default: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: nandani
 *               lastName:
 *                 type: string
 *                 example: gajjar
 *               age:
 *                 type: integer
 *                 example: 20
 *               contactNumber:
 *                 type: string
 *                 example: 2020202020
 *     responses:
 *       200:
 *         description: student data updated sucessfully
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
 *                    example: student data updated sucessfully
 *                 responseData:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: 1
 *       500:
 *         description: student data updation failed
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

// Pagination in student table
/**
 * @swagger
 * /pagination/{no}:
 *   get:
 *     summary: list student data page no wise
 *     parameters:
 *      - in: path
 *        name: no
 *        required: true
 *        default: 1
 *     tags: [Student Table]
 *     responses:
 *       200:
 *         description: list student data page wise
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
 *                    example: list student data page wise sucessfully
 *                 responseData:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: 1
 *                     firstName:
 *                       type: string
 *                       example: abc
 *                     lastName:
 *                       type: string
 *                       example: abc
 *                     age:
 *                       type: integer
 *                       example: 20
 *                     contactNumber:
 *                       type: string
 *                       example: 2020202020
 *       500:
 *         description: list student data page wise failed
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
