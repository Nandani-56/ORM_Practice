// Insert Data

/**
 * @swagger
 * /insertData:
 *   post:
 *     summary: Insert data into select master and option master
 *     tags: [Select Master / Option Master]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: gender
 *               controllerType:
 *                 type: string
 *                 example: dropdown
 *               allowMultiple:
 *                 type: boolean
 *                 example: false
 *               option_masters:
 *                 type: array
 *                 example : [{"optionKey":"g1","optionValue":"Female"},{"optionKey":"g2","optionValue":"Male"}]
 *     responses:
 *       200:
 *         description:  data inserted sucessfully
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
 *                    example: data insertion sucessfully
 *                 responseData:
 *                   type: object
 *                   properties:
 *                     data:
 *                       type: string
 *                       example: inserted
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

// Read Data

/**
 * @swagger
 * /readData?id:
 *   get:
 *     summary: list data from select master and option master
 *     tags: [Select Master / Option Master]
 *     parameters:
 *      - in: query
 *        name: id
 *        required: true
 *        default: 11
 *     responses:
 *       200:
 *         description: list data from select master and option master successfull
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

// Delete option master data

/**
 * @swagger
 * /deleteOptionMasterData/{id}:
 *   delete:
 *     summary: delete data from option master
 *     tags: [Select Master / Option Master]
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        default: 1
 *     responses:
 *       200:
 *         description: delete data from option master successfull
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
 *                    example: deleted data sucessfully
 *       500:
 *         description: delete data from option master failed
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

//delete data from select master

/**
 * @swagger
 * /deleteSelectMasterData/{id}:
 *   delete:
 *     summary: delete data from select master and option master both
 *     tags: [Select Master / Option Master]
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        default: 1
 *     responses:
 *       200:
 *         description: delete data from option master and seleect master successfull
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
 *                    example: deleted data sucessfully
 *       500:
 *         description: delete data from option master and select master failed
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

// update select master

/**
 * @swagger
 * /updateSelectMasterData/{id}:
 *   put:
 *     summary: update select master data
 *     tags: [Select Master / Option Master]
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
 *               name:
 *                 type: string
 *                 example: gender
 *               controllerType:
 *                 type: string
 *                 example: dropdown
 *               allowMultiple:
 *                 type: boolean
 *                 example: false
 *     responses:
 *       200:
 *         description: select master data updated sucessfully
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
 *                    example: select master data updated sucessfully
 *                 responseData:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: 1
 *       500:
 *         description: select master data updation failed
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

// update option master

/**
 * @swagger
 * /updateOptionMasterData:
 *   put:
 *     summary: update option master data
 *     tags: [Select Master / Option Master]
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
 *               option_masters:
 *                 type: string
 *                 example: gender
 *               controllerType:
 *                 type: string
 *                 example: dropdown
 *               allowMultiple:
 *                 type: boolean
 *                 example: false
 *     responses:
 *       200:
 *         description: select master data updated sucessfully
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
 *                    example: select master data updated sucessfully
 *                 responseData:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: 1
 *       500:
 *         description: select master data updation failed
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
