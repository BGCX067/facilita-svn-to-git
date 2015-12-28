# Filters added to this controller apply to all controllers in the application.
# Likewise, all the methods added will be available for all controllers.

class ApplicationController < ActionController::Base
  helper :all # include all helpers, all the time
  protect_from_forgery # See ActionController::RequestForgeryProtection for details

  # Scrub sensitive parameters from your log
  # filter_parameter_logging :password

  # Por enquanto sao tratadas apenas as codificacoes de tipo ISO-8859-1 e UTF-8
  def para_utf8(textoEntrada)
    if !textoEntrada.nil? && textoEntrada.length > 0 && !textoEntrada.is_utf8?
      textoEntrada =  Iconv.iconv('utf-8', 'iso-8859-1', textoEntrada)
    end
    return textoEntrada
  end
  def para_iso(textoEntrada)
    if !textoEntrada.nil? && textoEntrada.length > 0 && textoEntrada.is_utf8?
      textoEntrada =  Iconv.iconv('iso-8859-1', 'utf-8', textoEntrada)
    end
    return textoEntrada
  end
end
