import { Router } from 'express';
import {
  criarLivro,
  listarLivros,
  buscarLivroPorId,
  atualizarLivro,
  deletarLivro
} from '../controllers/livroController.js';

const router = Router();

router.post('/livros', criarLivro);           // Criar novo livro
router.get('/livros', listarLivros);          // Listar todos os livros
router.get('/livros/:id', buscarLivroPorId);  // Buscar livro por ID
router.put('/livros/:id', atualizarLivro);    // Atualizar livro existente
router.delete('/livros/:id', deletarLivro);   // Deletar livro

export default router;
