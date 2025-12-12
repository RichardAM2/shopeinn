import React, { useState } from 'react';
import { ShoppingCart, Home, Info, Phone, Package, User } from 'lucide-react';

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded-full bg-white p-2 shadow">
        <circle cx="50" cy="50" r="45" fill="#0B61C3" />
        <text x="50%" y="55%" textAnchor="middle" fontSize="34" fontWeight="700" fill="white" fontFamily="Arial">S</text>
      </svg>
      <div>
        <h1 className="text-2xl font-bold text-blue-700">Shopeinn</h1>
        <p className="text-sm text-gray-500">Produtos selecionados • Entrega para todo o Brasil</p>
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState('home');
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  const produtos = [
    {
      id: 1,
      nome: "Relógio Smart Fitness 2 em 1",
      descricao: "Relógio com monitor cardíaco, pressão, oxímetro e compartimento para fone BT.",
      imagem: "https://via.placeholder.com/600x400?text=Smart+Watch",
      preco: 199.90,
      fornecedor: "CJdropshipping",
      supplierLink: "https://cjdropshipping.com/product/smart-watch-bluetooth-earphone-2-in-1-bt-5.0-call-hear-rate-blood-pressure-for-bracelet-p-E404D297-6B9F-45DA-9A67-6AA4CA7FC390.html"
    },
    {
      id: 2,
      nome: "Fone Bluetooth Pro (True Wireless)",
      descricao: "Earbuds com cancelamento de ruído, estojo com recarga e longa autonomia.",
      imagem: "https://via.placeholder.com/600x400?text=Fone+Bluetooth",
      preco: 149.90,
      fornecedor: "CJdropshipping",
      supplierLink: "https://cjdropshipping.com/product/wireless-earbuds-earphone-bluetooth-headphone-waterproof-p-1553932524244709376.html"
    },
    {
      id: 3,
      nome: "Mini Projetor Portátil HD",
      descricao: "Projetor compacto para home-theater com conexão HDMI e bateria interna.",
      imagem: "https://via.placeholder.com/600x400?text=Mini+Projetor",
      preco: 299.90,
      fornecedor: "CJdropshipping",
      supplierLink: "https://cjdropshipping.com/product/wireless-bluetooth-headphones-feature-pure-sound-quality--instant-pairing--and-are-compact--portable--and-extremely-practical.-p-1902256690916118530.html"
    }
  ];

  const addToCart = (produto) => setCart([...cart, produto]);
  const removeFromCart = (id) => setCart(cart.filter((p) => p.id !== id));

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <nav className="bg-white shadow p-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center">
          <Logo />
        </div>
        <div className="flex gap-6 text-lg">
          <button onClick={() => setPage('home')} className="hover:text-blue-700 flex items-center gap-1"><Home size={20}/>Home</button>
          <button onClick={() => setPage('catalogo')} className="hover:text-blue-700 flex items-center gap-1"><Package size={20}/>Catálogo</button>
          <button onClick={() => setPage('sobre')} className="hover:text-blue-700 flex items-center gap-1"><Info size={20}/>Sobre</button>
          <button onClick={() => setPage('contato')} className="hover:text-blue-700 flex items-center gap-1"><Phone size={20}/>Contato</button>
          <button onClick={() => setPage('login')} className="hover:text-blue-700 flex items-center gap-1"><User size={20}/>Conta</button>
        </div>
        <div className="flex items-center gap-3 text-blue-700 font-semibold cursor-pointer" onClick={() => setPage('carrinho')}>
          <ShoppingCart size={22}/> {cart.length}
        </div>
      </nav>

      <main className="p-8">
        {page === 'home' && (
          <div className="text-center py-20">
            <h2 className="text-4xl font-bold text-blue-700 mb-4">Bem-vindo à Shopeinn</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Produtos modernos, tecnológicos e de alta qualidade. Entregamos em todo o Brasil.</p>
          </div>
        )}

        {page === 'catalogo' && (
          <section>
            <h2 className="text-3xl font-bold text-blue-700 mb-6">Catálogo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {produtos.map((p) => (
                <div key={p.id} className="bg-white rounded-2xl shadow p-4 flex flex-col items-center text-center">
                  <img src={p.imagem} alt={p.nome} className="w-full h-40 object-cover rounded-xl mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{p.nome}</h3>
                  <p className="text-gray-600 mb-2">{p.descricao}</p>
                  <p className="text-blue-700 font-bold text-lg mb-2">R$ {p.preco.toFixed(2)}</p>
                  <a href={p.supplierLink} target="_blank" rel="noreferrer" className="text-sm text-gray-500 underline mb-2">Ver fornecedor</a>
                  <button onClick={() => addToCart(p)} className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700">Adicionar ao Carrinho</button>
                </div>
              ))}
            </div>
          </section>
        )}

        {page === 'carrinho' && (
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Carrinho</h2>
            {cart.length === 0 ? <p className="text-gray-700 text-lg">Seu carrinho está vazio.</p> : (
              <div className="space-y-4">
                {cart.map((p, idx) => (
                  <div key={`${p.id}-${idx}`} className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-lg">{p.nome}</p>
                      <p className="text-blue-700 font-bold">R$ {p.preco.toFixed(2)}</p>
                      <p className="text-xs text-gray-500">Fornecedor: {p.fornecedor}</p>
                    </div>
                    <button onClick={() => removeFromCart(p.id)} className="text-red-600 hover:underline">Remover</button>
                  </div>
                ))}
                <button onClick={() => setPage('checkout')} className="w-full bg-green-600 text-white py-3 rounded-xl shadow text-lg hover:bg-green-700">Finalizar Compra</button>
              </div>
            )}
          </div>
        )}

        {page === 'checkout' && (
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Checkout</h2>
            <p className="text-lg mb-4">Preencha seus dados para concluir a compra.</p>
            <div className="bg-white p-6 rounded-2xl shadow space-y-4">
              <input placeholder="Nome Completo" className="w-full border p-3 rounded-xl" />
              <input placeholder="Endereço" className="w-full border p-3 rounded-xl" />
              <input placeholder="Email" className="w-full border p-3 rounded-xl" />
              <button className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg hover:bg-blue-700">Pagar Agora</button>

              <img className="mt-6 w-64 mx-auto" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxY..." alt="QR PIX"/>

              <p className="text-sm text-gray-500 mt-2">Dados para depósito: Conta 22534478-5 • Agência 077 • Banco Inter</p>
            </div>
          </div>
        )}

        {page === 'login' && (
          <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow">
            <h2 className="text-3xl font-bold text-blue-700 mb-6">Acessar Conta</h2>
            {!user ? (
              <>
                <input placeholder="Email" className="w-full border p-3 rounded-xl mb-4" />
                <input placeholder="Senha" type="password" className="w-full border p-3 rounded-xl mb-4" />
                <button onClick={() => setUser({ name: 'Cliente' })} className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg hover:bg-blue-700">Entrar</button>
              </>
            ) : (
              <p className="text-lg">Bem-vindo, {user.name}!</p>
            )}
          </div>
        )}

        {page === 'sobre' && (
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Sobre Nós</h2>
            <p className="text-gray-700 text-lg leading-relaxed">A Shopeinn trabalha com fornecedores internacionais e nacionais, garantindo produtos de alta qualidade com envio rápido.</p>
          </div>
        )}

        {page === 'contato' && (
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Contato</h2>
            <p className="text-gray-700 text-lg mb-2">Email: suporte@shopeinn.com</p>
            <p className="text-gray-700 text-lg">WhatsApp: (00) 90000-0000</p>
          </div>
        )}
      </main>

      <footer className="text-center text-gray-500 py-6 mt-10">© 2025 Shopeinn - Todos os direitos reservados.</footer>
    </div>
  );
}
