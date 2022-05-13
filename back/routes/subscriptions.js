import express from 'express';
import { getSubscriptions } from '../controllers/subscriptions';

const router = express.Router();

router.get('/', getSubscriptions);

// router.post('/', auth, createPost);
// router.patch('/:id', auth, updatePost);
// router.delete('/:id', auth, deletePost);