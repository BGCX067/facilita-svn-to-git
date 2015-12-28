/*
  ***********************************************************
  *** Application name: Facilita                          ***
  *** Version: 0.3                                        ***
  *** Authors: Willian Massami Watanabe, Arnaldo Candido  ***
  ***          Jr., Erick Maziero, Vinicius de Uzêda and  ***
  ***          Matheus de Oliveira                        ***
  *** Contact: watinha@gmail.com                          ***
  *** Last changes: 28/02/2010                            ***
  *** Projects homepage:                                  ***
  ***  - http://vinho.intermidia.icmc.usp.br:3001         ***
  ***********************************************************
*/
/*
  Development log:
    - Version 0.1: First running version build on Ruby on Rails and JQuery library
    - Version 0.2: Re-implemented all code, in order to use our own javascript library. Fewer bugs and a redesigned layout of the application. .
    - Version 0.3: Reincorporating the use of Jquery library and reusing the design and code from Educational Facilita project (http://vinho.intermidia.icmc.usp.br/watinha/Educational-Facilita). Also adding the Readability functionality in order to automatically extract the text that is to be summarized and then simplified.
*/

/**
  * Overlay Object.
  *  - Inserts an overlay on the page in order to present 
  *  unpreventable content to the user.
  *  - Requires Jquery library.
  *  
  *  @params DIVElement and HashMap with the options
  **/
function Overlay (main_element, options){
}
Overlay.prototype.constants = {
  OVERLAY_ID: "overlay_id"
};
Overlay.prototype.initialize = function(main_element, options){
  options = options || {};
  this.document_tab = document;
  /*
    option modal disables the background of the overlay in a way that the user
    is required to interact with the overlay before going back to the page itself.
  */
  if (!options["modal"])
    options["modal"] = "true";
  /*
    Option height used to define the height of the overlay box to be presented.
  */
  if (!options["height"])
    options["height"] = "50%";
  /*
    Option width to determine the width of the overlay box to be presented.
  */
  if (!options["width"])
    options["width"] = "50%";

  /*
    Option TOP to determine the position of the element
  */
  if (!options["top"])
    options["top"] = "15%";

  /*
    Option LEFT to determine the position of the element
  */
  if (!options["left"])
    options["left"] = "25%";

  /*
    Option POSITION to determine the kind of positioning of the overlay
  */
  if (!options["position"])
    options["position"] = "fixed";
    
  if (options["modal"] == "true"){
    this.modal_div = this.document_tab.createElement("div");
    $(this.modal_div).css({
      width: "100%",
      height: "100%",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 99998,
      opacity: 0.6,
      backgroundColor: "#000000"
    });
  }
    
  this.overlay_div = this.document_tab.createElement("div");
  $(this.overlay_div).css({
    width: options["width"],
    height: options["height"],
    position: options["position"],
    top: options["top"],
    left: options["left"],
    zIndex: 99999,
    opacity: 0.9,
    backgroundColor: "#FFFFFF",
    MozBorderRadius: "10px",
    WebkitBorderRadius: "10px",
    boxShadow: "10px 10px 5px #888"
  });
  $(this.overlay_div).append(main_element);

  this.container = this.document_tab.createElement("div");
  $(this.container).attr({
    id: this.constants.OVERLAY_ID
  });
  $(this.container).append(this.overlay_div);

  if(this.modal_div)
    $(this.container).append(this.modal_div);

  this.open();
}
Overlay.prototype.open = function(){
  /*
   * Verify if there is another current active overlay on the page
   */
  var active_overlay = $("#" + this.constants.OVERLAY_ID, this.document_tab);
  if(active_overlay.size() != 0){
    active_overlay.fadeOut(500, function(){
      $(this).remove();
    });
  }

  $(this.document_tab.body).append(this.container);

  /*
   * Generating the animation of the overlay opening
   */
  var overlay_height = $(this.overlay_div).css("height");

  $(this.container).css({opacity: 0});
  $(this.overlay_div).css({height: "0", opacity: 0});
  
  $(this.container).fadeTo(500, 1, function(){
    $(this.childNodes[0]).animate({
      height: overlay_height,
      opacity: 1
    }, 500);
  });
}
Overlay.prototype.close = function(){
  $(this.container).fadeTo(500, 0, function(){
    $(this).remove(); 
  });
}
/**
  * Dialog Object.
  *  - Inserts a Dialog in the page which is quite similar 
  *  to the Overlay with the difference that it can be closed
  *  at any time by the user.
  **/
function Dialog(main_element, title, options){
  this.initialize(main_element, options);
  this.insert_dialog_bar(title);
}
Dialog.prototype = new Overlay;
Dialog.prototype.insert_dialog_bar = function(title){
  this.dialog_bar_div = this.document_tab.createElement("div");
  $(this.dialog_bar_div).css({
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#DDDDDD",
    padding: "10px 0",
    fontFamily: "Arial"
  });
  
  this.dialog_title = this.document_tab.createElement("h2");
  this.dialog_title.innerHTML = title;
  $(this.dialog_title).css({
    textAlign: "left",
    color: "#555555",
    display: "inline",
    fontWeight: "normal",
    position: "relative",
    left: "10px",
    fontFamily: "Arial"
  });

  this.close_link = this.document_tab.createElement("a");
  this.close_link.innerHTML = "Voltar ao Site";
  $(this.close_link).attr({
    href: "#"
  });
  $(this.close_link).css({
    float: "right",
    fontSize: "2em",
    position: "relative",
    right: "10px",
    textDecoration: "none",
    color: "#000000"
  });
  $(this.close_link).hover(function(){
    $(this).css({color: "#666666"});
  }, function(){
    $(this).css({color: "#000000"});
  });
  var document_tab = this.document_tab;
  $(this.close_link).click(function(){
    $("#overlay_id", document_tab).fadeOut(1000, function(){
      $(this).remove();
    });
    return false;
  });

  /**
    * Adding some colors to the overlay border
    */
  $(this.overlay_div).css({
    borderTop: "solid 10px #6699EE",
    paddingBottom: "3.5em"
  });

  $(this.dialog_bar_div).append(this.dialog_title);
  $(this.dialog_bar_div).append(this.close_link);
  $(this.overlay_div).append(this.dialog_bar_div);
}

/**
  * Loading_dialog object
  *  - A simple way to implement the initial loading overlay of
  *  Educational Facilita, while the first textual processing 
  *  operations havent finished yet.
  */
function Loading_overlay(){
  var loading_overlay = document.createElement("div");
  $(loading_overlay).attr({
    id: "loading_overlay"
//    alt: "Carregando",
//    src: "http://vinho.intermidia.icmc.usp.br/watinha/Educational-Facilita/loading3.gif"
  });
  $(loading_overlay).css({
      border: "solid 3px #BBBBBB",
      width: "80%",
      marginLeft: "8%",
      height: "20px",
      padding: "3px"
  });

  var image_loading = document.createElement("img");
  $(image_loading).attr({
    alt: "Carregando as operações",
    src: "/images/loading.gif"
  });
  $(image_loading).css({
    position: "relative",
    bottom: "10px"
  });

  this.loading_bar = document.createElement("div");
  $(this.loading_bar).css({
     backgroundColor: "#66CC33", 
     height: "100%",
     width: "0"
  });

  $(loading_overlay).append(this.loading_bar).wrap("<div style='position:absolute;top:0;height:100%;background-color:#EEEEEE;width:100%;text-align:center;padding-top:10%'></div>").after("<h2 style='font-size: 300%;color:#33AA00;font-family:Arial;'>Aguarde...</h2>").before(image_loading);
  
  this.initialize($(loading_overlay).parent(), {height: "100%", width: "100%", left: "0", top: "0"});

//  $(this.overlay_div).css({
//    MozBoxShadow: "10px 10px 5px #333",
//    borderTop: "solid 10px #6699EE",
//    borderBottom: "solid 10px #AAAAAA"
//  });
}
Loading_overlay.prototype = new Overlay;
Loading_overlay.prototype.set_progress = function(progress){
  $(this.loading_bar).css({
    width: progress  
  });  
};

/**
  * Error_dialog function
  *  - A simplistic way for reusing a error standard message
  *
  */

function Error_dialog(){
  var error_img = document.createElement("img");
  $(error_img).attr({
    id: "error_img",
    alt: "Ocorreu um erro na chamada",
    src: "http://vinho.intermidia.icmc.usp.br/watinha/Educational-Facilita/disconnect.png"
  });

  $(error_img).wrap("<div style='position:absolute;top:0;width:100%;height:100%;text-align:center;padding-top:20%'></div>").after("<h2 style='font-size: 1.5em'>Ocorreu um erro de processamento no Facilita Educativo. Tente novamente...</h2>");
   
  var error_overlay = new Overlay();
  error_overlay.initialize($(error_img).parent(), {height: "100%", width: "100%", left: "0", top: "0"});
  return error_overlay;
}
