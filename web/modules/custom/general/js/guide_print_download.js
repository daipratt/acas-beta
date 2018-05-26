Drupal.behaviors.guide_print_download = {
  attach: function(context, settings) {
    // Print modal
    jQuery(".print-download-email .print-opener").click(function() {
      jQuery(".print-download-email #guide_print_download_overlay").show();
      jQuery(".print-download-email #guide_print_modal").show();
      return false;
    });
    jQuery(".print-download-email .print-page .btn-cta--print-page").click(function() {
      closeModals();
      var win = window.open(this.href);
      win.print();
      win.close();
      return false;
    });
    jQuery(".print-download-email .print-guide .btn-cta--print-guide").click(function() {
      closeModals();
      var win = window.open(this.href);
      win.print();
      win.close();
      return false;
    });
    
    // Download modal
    jQuery(".print-download-email .download-opener").click(function() {
      jQuery(".print-download-email #guide_print_download_overlay").show();
      jQuery(".print-download-email #guide_download_modal").show();
      return false;
    });
    jQuery(".print-download-email .download-page .btn-cta--download-page").click(function() {
      closeModals();
    });
    jQuery(".print-download-email .download-guide .btn-cta--download-guide").click(function() {
      closeModals();
    });
    
    // Misc
    jQuery(".print-download-email .modal .close").click(function() {
      closeModals();
    });
    jQuery("#guide_print_download_overlay").click(function() {
      closeModals();
    });
  }
};

function closeModals() {
  jQuery(".modal").hide();
  jQuery("#guide_print_download_overlay").hide();
}