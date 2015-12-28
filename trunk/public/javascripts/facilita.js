/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function fadeIn(idElemento, tempoBase){
  this.elemento = document.getElementById(idElemento);
  for(var cont=0; cont <= 100; cont++){
        setTimeout(("this.elemento.style.filter='alpha(opacity="+ cont +")';"), cont*10*tempoBase/10);
        setTimeout(("this.elemento.style.opacity="+ cont/100 +";"), cont*10*tempoBase);
        setTimeout(("this.elemento.style.MozOpacity="+ cont/100 +";"), cont*10*tempoBase);
   }
}
function fadeOut(idElemento, tempoBase){
  this.elemento = document.getElementById(idElemento);
  for(var cont=0; cont <= 100; cont++){
        setTimeout(("this.elemento.style.filter='alpha(opacity="+ (100 - cont) +")';"), cont*10*tempoBase/10);
        setTimeout(("this.elemento.style.opacity="+ (1 - cont/100) +";"), cont*10*tempoBase);
        setTimeout(("this.elemento.style.MozOpacity="+ (1 - cont/100) +";"), cont*10*tempoBase);
   }
 }
function Dialog(ParamDivDialog, tituloDialog){
      this.divDentroDialog = ParamDivDialog;
      try{
          this.divExtra=document.createElement('div');
          this.divExtra.style.height='100%';
          this.divExtra.style.width='100%';
          this.divExtra.style.zIndex='9997';
          this.divExtra.style.position='fixed';
          this.divExtra.style.left='0';
          this.divExtra.id = 'dialog';
          if(navigator.appName=='Microsoft Internet Explorer'){
            scrollPosition = document.body.scrollTop;
          }else{
            scrollPosition = window.pageYOffset;
          };
          this.divExtra.style.top = "2%";

          this.divEscura = document.createElement('div');
          this.divEscura.style.height='99.99%';
          this.divEscura.style.width='99.99%';
          this.divEscura.style.position='fixed';
          this.divEscura.style.top='0';
          this.divEscura.style.left='0';
          this.divEscura.style.backgroundColor='#000000';
          this.divEscura.style.zIndex='9998';
          this.divEscura.id = "escura";

          this.divEscura.style.filter="alpha(opacity=70)";
          this.divEscura.style.opacity=0.7;
          this.divEscura.style.MozOpacity=0.7;

            this.divConteudo = document.createElement('div');
            this.divConteudo.style.height = "90%";
            this.divConteudo.style.width = "100%";
            this.divConteudo.id = "dialogConteudo";

            this.divBaixoDialog = document.createElement('div');
            this.divBaixoDialog.style.textAlign = "right";
            this.divBaixoDialog.style.height = "10%";
            this.divBaixoDialog.style.width = "100%";
            this.divBaixoDialog.style.padding = "1em 1em 1em 1em";

            this.divTitulo = document.createElement('div');
            this.divTitulo.style.cssFloat = "left";
            this.divTitulo.style.fontWeight = "bold";
            this.divTitulo.style.color = "#999999";
            this.divTitulo.style.textAlign = "left";
            this.divTitulo.style.fontSize = "16px";
            this.divTitulo.style.position = "absolute";
            this.divTitulo.style.bottom = "1em";
            this.divTitulo.style.left = "1em";
            this.divTitulo.style.fontFamily = "arial";
            this.divTitulo.innerHTML = tituloDialog;

            this.linkFechar = document.createElement('a');
            this.linkFechar.style.fontSize = '28px';
            this.linkFechar.style.zIndex = '9998';
            this.linkFechar.style.padding = '0.5em 0.5em 0.5em 0.5em';
            this.linkFechar.style.color = '#666666';
            this.linkFechar.style.backgroundColor = '#FFFFFF';
            this.linkFechar.style.fontFamily = 'sans-serif';
            this.linkFechar.style.textDecoration = 'none';
            this.linkFechar.href = '#';
            this.fecharText = document.createTextNode('Voltar');
            this.linkFechar.appendChild(this.fecharText);
            this.linkFechar.onclick=function(){
                /* linha especifica para o funcionamento do facilita */
                document.getElementById('dialogConteudo').removeChild(document.getElementById('frameFacilita'));
                fadeOut('dialog', 1);
                setTimeout("document.body.removeChild(document.getElementById('dialog'));", 2000);
                setTimeout("document.body.removeChild(document.getElementById('facilita'));", 2000);
                return false;
            };
            this.linkFechar.onmouseover=function(){
                this.style.color = "#000000";
                this.style.textDecoration = "none";
            };
            this.linkFechar.onmouseout=function(){
                this.style.color = "#999999";
            };
            this.divBaixoDialog.appendChild(this.divTitulo);
            this.divBaixoDialog.appendChild(this.linkFechar);

          this.divDialog = document.createElement('div');
          this.divDialog.style.width='70%';
          this.divDialog.style.height='80%';
          this.divDialog.style.position='absolute';
          this.divDialog.style.top='5%';
          this.divDialog.style.left='15%';
          this.divDialog.style.zIndex='9999';
          this.divDialog.style.backgroundColor='#FFFFFF';
          this.divDialog.style.padding = "1em 1em 1em 1em";
          this.divDialog.style.textAlign = "right";
          this.divDialog.id = "caixaInterna";

          this.divExtra.appendChild(this.divDialog);
          this.divExtra.appendChild(this.divEscura);
          this.divDialog.appendChild(this.divConteudo);
          this.divDialog.appendChild(this.divBaixoDialog);

          this.divExtra.style.filter= "alpha(opacity=0)";
          this.divExtra.style.opacity=0;
          this.divExtra.style.MozOpacity=0;

          this.divDialog.style.filter= "alpha(opacity=100)";
          this.divDialog.style.opacity=1;
          this.divDialog.style.MozOpacity=1;

        }catch(ex){
          alert(ex);
        };
      this.fecharDialog = function(){
        fadeOut('dialog', 1);
      }
      this.abrirDialog = function(){
        document.body.appendChild(this.divExtra);
        this.divConteudo.appendChild(this.divDentroDialog);
        fadeIn('dialog', 1);
      }
}
function Ajax(){
    if (window.XMLHttpRequest){
      this.xmlhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject){
      this.xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else{
      alert("Your browser does not support XMLHTTP!");
    }
    this.xmlhttp.inicioRequisicao = function(){
    }
    this.xmlhttp.terminoRequisicao = function(dados){
    }
    this.xmlhttp.erroRequisicao = function(){
    }
    this.xmlhttp.carregamentoRequisicao = function(){
    }
    this.xmlhttp.onreadystatechange = function(){
        try{
            if(this.readyState == 1){
              this.inicioRequisicao();
            }
            if(this.readyState == 3){
              this.carregamentoRequisicao();
            }
            if(this.readyState == 4){
              if(this.status == 200){
                this.terminoRequisicao(this.responseText);
              }else{
                this.xmlhttp.erroRequisicao();
              }
            }
        }catch(e){
            alert(e);
        }
    }
    this.doGet = function(endereco, dados){
        this.xmlhttp.open("GET", endereco + "?" + dados, true);
        this.xmlhttp.send(null);
    }
    this.doPost = function(endereco, dados){
        this.xmlhttp.open("POST", endereco, true);
        this.xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        this.xmlhttp.setRequestHeader("Content-length", dados.length);
        this.xmlhttp.setRequestHeader("Connection", "close");
        if(dados.length == 0){
          this.xmlhttp.send(null);
        }else{
          this.xmlhttp.send(dados);
        }
    }
}
try{
  textoSelecionado=window.getSelection();
}catch(ex){
  try{
    textoSelecionado=document.getSelection();
  }catch(e2){
    textoSelecionado=document.selection.createRange().text;
  }
};

var formulario = document.createElement('form');
formulario.action = "http://localhost:3000/facilita/frameFacilita";
formulario.method = "POST";

var parametro = document.createElement('input');
parametro.type = "text";
parametro.name = "texto";
parametro.value = textoSelecionado;

formulario.appendChild(parametro);

var frameFacilita = document.createElement('iframe');
frameFacilita.name = "frameFacilita";
frameFacilita.width = "100%";
frameFacilita.height = "100%";
frameFacilita.style.border = "none";
frameFacilita.id = "frameFacilita";

        dialogFacilita = new Dialog(frameFacilita, "PorSimples - Facilita: aux&iacute;lio &agrave; leitura");
dialogFacilita.abrirDialog();

 if(frameFacilita.contentWindow) {
   conteudoFrame = frameFacilita.contentWindow;
 } else if(frameFacilita.contentDocument){
   conteudoFrame = frameFacilita.contentDocument;
 }

try{
    conteudoFrame.document.body.appendChild(formulario);
    formulario.submit();
}catch(e){
    var urlGet = "http://vinho.intermidia.icmc.usp.br:3001/conteudo_facilitado/frame_facilita?texto=" + textoSelecionado;
    frameFacilita.src = urlGet;
}
