import { Livro } from '../database/models/Livro.js';
// Criar novo livro
export const criarLivro = async (req, res) => {
  try {
    const { nome_livro, nome_autor } = req.body;
    console.log(nome_livro)
    const novoLivro = await Livro.create({ nome_livro, nome_autor });
    res.status(201).json(novoLivro);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};
// Listar todos os livros
export const listarLivros = async (req, res) => {
  try {
    const livros = await Livro.findAll();
    res.status(200).json(livros);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};
// Obter livro por ID
export const buscarLivroPorId = async (req, res) => {
  try {
    const livro = await Livro.findByPk(req.params.id);

    if (!livro) return res.status(404).json({ mensagem: 'Livro não encontrado' });

    res.status(200).json(livro);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};
// Atualizar livro
export const atualizarLivro = async (req, res) => {
  try {
    const livro = await Livro.findByPk(req.params.id);
    if (!livro) return res.status(404).json({ mensagem: 'Livro não encontrado' });

    await livro.update(req.body);
    res.status(201).json(livro);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};
// Deletar livro
export const deletarLivro = async (req, res) => {
  try {
    const livro = await Livro.findByPk(req.params.id);
    if (!livro) return res.status(404).json({ mensagem: 'Livro não encontrado' });

    await livro.destroy();
    res.status(201).json({ mensagem: 'Livro deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};
