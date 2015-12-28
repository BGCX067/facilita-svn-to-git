require 'rest_request'

# Template para efetivar o Strategy pattern para as chamadas ao servidor do PorSimples
# Essa classe e responsavel pelas chamadas ao simplificador e sumarizador para alfabetizados
# de nivel rudimentar
class SumaryStrategy < RestRequestTemplate
  def initialize(entry_text)
    # Definicao da URL em que e disponibilizado o servico de simplificacao e sumarizacao
    @urlDestino = 'http://nilc.icmc.usp.br/porsimples/facilita/facilita.php'

    # Estabelecimento dos parametros da chamada RESTful
    @parametros = {'texto' => entry_text, 'simplificacao' => 'nenhuma', 'sumarizacao' => 0.3}
  end
end

