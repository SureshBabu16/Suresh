$(document).ready(function () {
    var myFirstElement = $(".outside-preview");
    var mysecondElement = $(".outside-preview1");
    $(".headerBgColor").spectrum({
        color: "#ff0000",
        showInput: true,
        className: "full-spectrum",
        showInitial: true,
        showPalette: true,
        showSelectionPalette: true,
        maxSelectionSize: 10,
        preferredFormat: "hex",
        localStorageKey: "spectrum.demo",
      
        change: function (color) {

            $('.outside-preview').css('background-color', color.toHexString())
        }
   
    });
    $(".headerName").spectrum({
        color: "#fff",
        showInput: true,
        className: "full-spectrum",
        showInitial: true,
        showPalette: true,
        showSelectionPalette: true,
        maxSelectionSize: 10,
        preferredFormat: "hex",
        localStorageKey: "spectrum.demo",
        
        change: function (color) {

            $('.outside-preview1').css('color', color.toHexString())
        }
   
    });
    $(".headerContactButtonColor").spectrum({
        color: "#ff0000",
        showInput: true,
        className: "full-spectrum",
        showInitial: true,
        showPalette: true,
        showSelectionPalette: true,
        maxSelectionSize: 10,
        preferredFormat: "hex",
        localStorageKey: "spectrum.demo",
        
        change: function (color) {

            $('.outside-preview2').css('background-color', color.toHexString())
        }
   
    });
    $(".headerTextColor").spectrum({
        color: "#fff",
        showInput: true,
        className: "full-spectrum",
        showInitial: true,
        showPalette: true,
        showSelectionPalette: true,
        maxSelectionSize: 10,
        preferredFormat: "hex",
        localStorageKey: "spectrum.demo",
        
        change: function (color) {

            $('.outside-preview3').css('color', color.toHexString())
        }
   
    });
    $(".headerDesignation").spectrum({
        color: "#fff",
        showInput: true,
        className: "full-spectrum",
        showInitial: true,
        showPalette: true,
        showSelectionPalette: true,
        maxSelectionSize: 10,
        preferredFormat: "hex",
        localStorageKey: "spectrum.demo",
        
        change: function (color) {

            $('.outside-preview4').css('color', color.toHexString())
        }
   
    });
    $(".contactButtonText").spectrum({
        color: "#fff",
        showInput: true,
        className: "full-spectrum",
        showInitial: true,
        showPalette: true,
        showSelectionPalette: true,
        maxSelectionSize: 10,
        preferredFormat: "hex",
        localStorageKey: "spectrum.demo",
        
        change: function (color) {

            $('.outside-preview2').css('color', color.toHexString())
        }
   
    });
    $(".sidebarGetInButtonColor").spectrum({
        color: "#ff0000",
        showInput: true,
        className: "full-spectrum",
        showInitial: true,
        showPalette: true,
        showSelectionPalette: true,
        maxSelectionSize: 10,
        preferredFormat: "hex",
        localStorageKey: "spectrum.demo",
        
        change: function (color) {

            $('.outside-preview5').css('background-color', color.toHexString())
        }
   
    });
    $(".sidebarGetInTouchTextColor").spectrum({
        color: "#fff",
        showInput: true,
        className: "full-spectrum",
        showInitial: true,
        showPalette: true,
        showSelectionPalette: true,
        maxSelectionSize: 10,
        preferredFormat: "hex",
        localStorageKey: "spectrum.demo",
        
        change: function (color) {

            $('.outside-preview5').css('color', color.toHexString())
        }
   
    });
    $(".sidebarWebsiteButtonColor").spectrum({
        color: "#fff",
        showInput: true,
        className: "full-spectrum",
        showInitial: true,
        showPalette: true,
        showSelectionPalette: true,
        maxSelectionSize: 10,
        preferredFormat: "hex",
        localStorageKey: "spectrum.demo",
        
        change: function (color) {

            $('.outside-preview6').css('background-color', color.toHexString())
        }
   
    });
    $(".sidebarWebsiteButtonTextColor").spectrum({
        color: "#ff0000",
        showInput: true,
        className: "full-spectrum",
        showInitial: true,
        showPalette: true,
        showSelectionPalette: true,
        maxSelectionSize: 10,
        preferredFormat: "hex",
        localStorageKey: "spectrum.demo",
        
        change: function (color) {

            $('.outside-preview6').css('color', color.toHexString())
        }
   
    });
    $(".sidebarPhoneColor").spectrum({
        color: "#000",
        showInput: true,
        className: "full-spectrum",
        showInitial: true,
        showPalette: true,
        showSelectionPalette: true,
        maxSelectionSize: 10,
        preferredFormat: "hex",
        localStorageKey: "spectrum.demo",
        
        change: function (color) {

            $('.outside-preview7').css('color', color.toHexString())
        }
   
    });
    $(".sidebarColor").spectrum({
        color: "#dd7575",
        showInput: true,
        className: "full-spectrum",
        showInitial: true,
        showPalette: true,
        showSelectionPalette: true,
        maxSelectionSize: 10,
        preferredFormat: "hex",
        localStorageKey: "spectrum.demo",
        
        change: function (color) {

            $('.outside-preview8').css('background-color', color.toHexString())
        }
   
    });


    $(".mainbodyProfileBackgroundColor").spectrum({
        color: "#dd7575",
        showInput: true,
        className: "full-spectrum",
        showInitial: true,
        showPalette: true,
        showSelectionPalette: true,
        maxSelectionSize: 10,
        preferredFormat: "hex",
        localStorageKey: "spectrum.demo",
        
        change: function (color) {

            $('.outside-preview9').css('background-color', color.toHexString())
        }
   
    });
    $(".mainbodyProfileButtonColor").spectrum({
        color: "#ff0000",
        showInput: true,
        className: "full-spectrum",
        showInitial: true,
        showPalette: true,
        showSelectionPalette: true,
        maxSelectionSize: 10,
        preferredFormat: "hex",
        localStorageKey: "spectrum.demo",
        
        change: function (color) {

            $('.outside-preview10').css('background-color', color.toHexString())
        }
   
    });
    $(".mainbodyHyperlinkColor").spectrum({
        color: "#008000",
        showInput: true,
        className: "full-spectrum",
        showInitial: true,
        showPalette: true,
        showSelectionPalette: true,
        maxSelectionSize: 10,
        preferredFormat: "hex",
        localStorageKey: "spectrum.demo",
        
        change: function (color) {

            $('.outside-preview11').css('color', color.toHexString())
        }
   
    });
    $(".mainbodyProfileTextColor").spectrum({
        color: "#ff0000",
        showInput: true,
        className: "full-spectrum",
        showInitial: true,
        showPalette: true,
        showSelectionPalette: true,
        maxSelectionSize: 10,
        preferredFormat: "hex",
        localStorageKey: "spectrum.demo",
        
        change: function (color) {

            $('.outside-preview12').css('color', color.toHexString())
        }
   
    });
    $(".mainbodyProfileButtonTextColor").spectrum({
        color: "#fff",
        showInput: true,
        className: "full-spectrum",
        showInitial: true,
        showPalette: true,
        showSelectionPalette: true,
        maxSelectionSize: 10,
        preferredFormat: "hex",
        localStorageKey: "spectrum.demo",
        
        change: function (color) {

            $('.outside-preview10').css('color', color.toHexString())
        }
   
    });

    $('#dochange').click(function () {

        $('body').css('background-color', $('#colorpicker').val());

        return false;
    });

 

});