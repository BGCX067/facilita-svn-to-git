require 'rudimentary'
require 'sumarizacao'

class FacilitaController < ApplicationController

  self.allow_forgery_protection = false

  def index
    @url_servidor = url_servidor
    @usuarios = ['rudimentar', 'teste']
  end

  def frame_facilita
    @nivel_usuario = params[:nivel]
    @textoSelecionado = para_utf8(params[:texto])
  end

  def frame_facilita_readability
    @nivel_usuario = params[:nivel]
    @textoSelecionado = params[:texto]
    @titulo_pagina = params[:title]  
  end

  def javascript_facilita
    @url_servidor = url_servidor
    @nivel_usuario = params[:nivel]
    render :content_type => "text/javascript"
  end

  # Design pattern strategy
  def rudimentar
    servico_facilita = RudimentaryStrategy.new(para_utf8(params[:texto]))
    render :text => servico_facilita.doPost
  end

  def teste
    sleep 10
    #servico_facilita = SumaryStrategy.new(para_utf8(params[:texto]))
    #render :text => servico_facilita.doPost
    texto = "<p style=\"display:inline;\" class=\"readability-styled\">A ciência tentava comprovar a parcela de culpa da alimentação nos problemas de saúde. Uma lista crescente de alimentos ia para o \"banco dos réus\" e para fora dos pratos de muita gente.</p>"
    texto += "<p><b><a href=\"http://saude.terra.com.br/interna/0,,OI3273958-EI1520,00-Colesterol+ou+triglicerides+qual+pesa+mais+na+sua+saude.html\" class=\"textolinkbold\">» Colesterol ou triglicérides: qual pesa mais na sua saúde? </a></b><br><b><a href=\"http://chat.terra.com.br:9781/diversos.htm\" class=\"textolinkbold\" target=\"_blank\">» Chat: tecle sobre o assunto</a></b></p>"
    texto += "<p>Felizmente , os avanços nos estudos , nos últimos anos , mostraram que certos \"vilões\" são , na verdade , mais mocinhos do que aparentam . Os vilões são também saborosos. Não apenas porque se descobriu que esses alimentos também apresentam nutrientes. Nutrientes fazem maravilhas ao organismo . Mas , especialmente , pela comprovação de que o verdadeiro perigo está na forma como se come. O verdadeiro perigo não está necessariamente no alimento que é consumido.</p>"
    texto += "<p>O médico Paulo Olzon Monteiro da Silva garante \"A receita de bem-estar e vida longa em frente à mesa é simples\". O médico é chefe da disciplina de Clínica Médica da Universidade Federal de São Paulo. A Universidade Federal de São Paulo é Unifesp. O médico orienta \"Alguns alimentos devem ser ingeridos com parcimônia , em quantidades reduzidas\".</p>"
    texto += "<p>Confira, a seguir, os mitos e verdades relacionados a alguns alimentos. Alguns alimentos passaram de vilões a mocinhos:<br><b>Abacate:</b><br><i>o que diziam dessa fruta:</i> A fruta era proibida na dieta de quem desejava emagrecer. A fruta é muito calórica. Algumas pessoas acusavam o abacate de ser um alimento rico em colesterol. Isso ocorre por ser bastante oleoso. Detalhe: esse tipo de gordura só existe em fontes de origem animal.</p>"
    texto += "<p><i>qual era o seu lado mocinho:</i> A fruta tem alta concentração de vitaminas e minerais . Isso ocorre por conter pouca água. E olhe a ironia: O abacate previne o colesterol ruim. O colesterol ruim é LDL. O abacate mantém os níveis do colesterol bom. O colesterol bom é HDL. Isso ocorre por ser rico em ácido oléico. O ácido oléico é uma gordura monoinsaturada. A gordura monoinsaturada é gordura do bem. A gordura do bem dá a oleosidade da fruta.</p>"
    texto += "<p><b>Café:</b><br><i>o que diziam dessa bebida:</i> A bebida provocava gastrite, elevação da pressão arterial, agitação e insônia. A bebida era ainda relacionada à má absorção de cálcio. A má absorção de cálcio poderia contribuir para enfraquecer os ossos. A bebida é corriqueira no cardápio nacional. A bebida inclusive dá nome ao desjejum. Desjejum é café da manhã. Especialistas confirmam que esse malefícios dependem muito mais do grau de sensibilidade de algumas pessoas à cafeína.</p>"
    texto += "<p><i>qual o seu lado mocinho:</i> pesquisas apontam que o consumo moderado da bebida auxilia na concentração e na memória. Isso diminui os riscos de doenças degenerativas. Estudo aponta ainda que a gordura presente na bebida tem relação direta com sua preparação. O estudo foi publicado em 2006 e realizado pela nutricionista Rosana Perim. A nutricionista é gerente de Nutrição do Hospital do Coração.</p>"
    texto += "<p><b>Chocolate:</b><br><i>o que diziam da guloseima:</i> Essa guloseima era sinônimo de gordura e açúcar em excesso. Por isso de alto teor calórico.</p>"
    texto += "<p><i>qual o seu lado mocinho:</i> Acredite se quiser. Mas o doce ajuda a relaxar e até a dormir. O médico Guenther Von Eye é quem defende a idéia. O médico é professor adjunto de Medicina Interna da Universidade Federal do Rio Grande do Sul. O médico completa \"O chocolate libera endorfina. Endorfina é substância ligada à sensações de prazer e bem-estar. Por isso ajuda a pessoa se sentir bem. Por isso, inclusive, que há sempre um bombom nos quartos de hotéis\".</p>"
    texto += "<p>Uma pesquisa realizada por Ian Macdonald aponta ainda que o flavanol aumenta o fluxo sanguíneo no cérebro. A pesquisa foi publicada pela agência internacional de notícias Reuters. Ian Macdonald é da University of Nottingham Medical School. A University of Nottingham Medical School é na Inglaterra. O flavanol é substância presente no cacau. Isso pode ser uma esperança no tratamento de danos vasculares.</p>"
    texto += "<p><b>Ovo:</b><br><i>o que diziam dele:</i> O ovo foi, por muito tempo, considerado o principal inimigo de pessoas com problemas cardíacos. O ovo é rico em colesterol. O médico Paulo Olzon alerta \"As pessoas só não sabem que 70% a 80% do colesterol são produzidos pelo fígado, só o restante vem da alimentação\". O médico é da Unifesp.</p>"
    texto += "<p><i>qual o seu lado mocinho:</i> A nutricionista Eliana Cristina de Almeida ensina \"O ovo apresenta risco somente para pessoas com predisposição genética a produzir de forma elevada o colesterol pelo fígado. Isso ocorre quando consumido sem exagero\". A nutricionista é professora da Unifesp.<\p>"
    texto += "<p>Finaliza \"O ovo tem substâncias de proteção contra a arteriosclerose, por exemplo. O importante é não exagerar na dose. Isso ocorre porque todo alimento em excesso traz prejuízos ao organismo\".</p>"
    texto += "<p>A gema oferece uma grande concentração de colina. Por isso, comer ovo é uma forma de garantir a integridade celular.</p>"
    render :text => texto
  end
  
  private
  def url_servidor
    "http://localhost:3000/"
  end

end

