require 'net/http'

# Strategy (template) para instanciar as chamadas ao servidor de simplificacao e sumarizacao
class RestRequestTemplate
  attr_reader :urlDestino, :parametros, :response_header, :response_body

  def initialize
    # urlDestino indica o endereco do destino do Request HTTP
    # parametros indica os parametros da chamada em uma HASH
  end

  def doGet
    uriDestino = URI.parse(@urlDestino)
    @response_header, @response_body = Net::HTTP.get_response(uriDestino, @parametros)
    return @response_body
  end

  def doPost
    # parametros deve ser uma variavel de tipo hash visto a comunicacao em formato xxx-url-enconded
    uriDestino = URI.parse(@urlDestino)
    @response_header, @response_body = Net::HTTP.post_form(uriDestino, @parametros)
    return @response_body
  end

  def doPut(parametros)

  end

  def doDelete(parametros)

  end
end
