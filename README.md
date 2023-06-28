# my-app


Estava dando tela branca ao fazer o deploy, depois deu tela preta, a solução estava nas configurações do BrowserRouter.
Solução abaixo:

  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details/:id" element={<Details/>}/>
    </Routes>
  </BrowserRouter>
);
