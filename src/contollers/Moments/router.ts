import { authJWt } from './../../lib/authenticate';
import { logger } from './../../lib/logger';
import { Router } from "express";
import { checkSchema } from 'express-validator/check'
import momentController from './MomentController'
import controllerAdapter from '../../middlewares/controllerAdapter';
import validation from './validation'
const router = Router();
router.post('/', authJWt, checkSchema(validation.moment.post as any), controllerAdapter(momentController, "createMoment"))

router.get('/all', authJWt, controllerAdapter(momentController, "getAllMoment"))
router.put('/:id', authJWt, checkSchema(validation.moment.put as any), controllerAdapter(momentController, "updateMoment"))

router.delete('/:id', authJWt, checkSchema(validation.moment.delete as any), controllerAdapter(momentController, "deleteMoment"))
export default router;