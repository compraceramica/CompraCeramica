$wcfm_products_table='';var $wcfm_is_valid_form=!0;var $wcfm_message_close_timer='';var tinyMce_toolbar='undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify |  bullist numlist outdent indent | link image | ltr rtl';if(wcfm_params.wcfm_allow_tinymce_options){tinyMce_toolbar=wcfm_params.wcfm_allow_tinymce_options}
$popup_width='50%';$large_popup_width='75%';if(jQuery(window).width()<=768){$popup_width='95%';$large_popup_width='95%'}
function initiateTip(){jQuery('.img_tip, .text_tip').each(function(){if(jQuery(window).width()>640){jQuery(this).qtip({content:jQuery(this).attr('data-tip'),position:{my:'top center',at:'bottom center',viewport:jQuery(window)},show:{event:'mouseover',solo:!0,},hide:{inactive:6000,fixed:!0},style:{classes:'qtip-dark qtip-shadow qtip-rounded qtip-wcfm-css qtip-wcfm-core-css'}})}else{jQuery(this).attr('title',jQuery(this).data('tip'))}})}
function GetURLParameter(sParam){var sPageURL=window.location.search.substring(1);var sURLVariables=sPageURL.split('&');for(var i=0;i<sURLVariables.length;i++){var sParameterName=sURLVariables[i].split('=');if(sParameterName[0]==sParam){return sParameterName[1]}}}
function wcfmMessageHide(){clearTimeout($wcfm_message_close_timer);$wcfm_message_close_timer=setTimeout(function(){jQuery('.wcfm-message').slideUp("slow",function(){jQuery('.wcfm-message').html('').removeClass('wcfm-success').removeClass('wcfm-error');$wcfm_is_valid_form=!0})},10000)}
function getWCFMEditorContent(editor_id){var editor_content='';if(jQuery('#'+editor_id).length>0){if(jQuery('#'+editor_id).hasClass('rich_editor')||jQuery('#'+editor_id).hasClass('wcfm_wpeditor')){if(typeof tinymce!='undefined'){if(tinymce.get(editor_id)!=null)editor_content=tinymce.get(editor_id).getContent({format:'raw'});else editor_content=jQuery('#'+editor_id).val()}else{editor_content=jQuery('#'+editor_id).val()}}else{editor_content=jQuery('#'+editor_id).val()}}
return editor_content}
jQuery(document).ready(function($){initiateTip();function unwrapSelect(){$('.wcfm_popup_wrapper').find('select').each(function(){if($(this).parent().is("span")){$(this).unwrap("span")}
if($(this).parent().hasClass("select-option")||$(this).parent().hasClass("buddyboss-select-inner")||$(this).parent().hasClass("buddyboss-select")){$(this).parent().find('.ti-angle-down').remove();$(this).parent().find('span').remove();$(this).unwrap("div")}});setTimeout(function(){unwrapSelect()},500)}
setTimeout(function(){$('.wcfm_popup_wrapper').find('select').each(function(){if($(this).parent().is("span")){$(this).css('padding','5px').css('min-width','15px').css('min-height','35px').css('padding-top','5px').css('padding-right','5px')}});unwrapSelect()},500);$('.wcfm_delete_product').each(function(){$(this).click(function(event){event.preventDefault();var rconfirm=confirm(wcfm_core_dashboard_messages.product_delete_confirm);if(rconfirm)deleteWCFMProduct($(this));return!1})});function deleteWCFMProduct(item){jQuery('.products').block({message:null,overlayCSS:{background:'#fff',opacity:0.6}});var data={action:'delete_wcfm_product',proid:item.data('proid')}
jQuery.ajax({type:'POST',url:wcfm_params.ajax_url,data:data,success:function(response){window.location=wcfm_params.shop_url}})}
$(document.body).on('wcfm_form_validate',function(event,validating_form){$proccessed_required_fileds=[];if(validating_form){$form=$(validating_form);$form.find('[data-required="1"]').each(function(){$data_name=$(this).attr('name');if($.inArray($data_name,$proccessed_required_fileds)===-1){$proccessed_required_fileds.push($data_name);if(!$(this).parents('.wcfm-container').hasClass('wcfm_block_hide')&&!$(this).parents('.wcfm-container').hasClass('wcfm_custom_hide')&&!$(this).parent().parent().hasClass('wcfm_block_hide')&&!$(this).parent().parent().hasClass('wcfm_custom_hide')&&!$(this).parent().hasClass('wcfm_block_hide')&&!$(this).parent().hasClass('wcfm_custom_hide')&&!$(this).hasClass('wcfm_ele_hide')&&!$(this).hasClass('wcfm_custom_hide')){if($(this).is('input[type="checkbox"]')||$(this).is('input[type="radio"]')){$('[name="'+$data_name+'"]').removeClass('wcfm_validation_failed').addClass('wcfm_validation_success');if(!$('[name="'+$data_name+'"]').is(":checked")){if($wcfm_is_valid_form)
$('#'+$form.attr('id')+' .wcfm-message').html('<span class="wcicon-status-cancelled"></span>'+$(this).data('required_message')).addClass('wcfm-error').slideDown();else $('#'+$form.attr('id')+' .wcfm-message').append('<br /><span class="wcicon-status-cancelled"></span>'+$(this).data('required_message'));$wcfm_is_valid_form=!1;$('[name="'+$data_name+'"]').removeClass('wcfm_validation_success').addClass('wcfm_validation_failed')}}else{$(this).removeClass('wcfm_validation_failed').addClass('wcfm_validation_success');$data_val=$(this).val();if(!$data_val){if($wcfm_is_valid_form)
$('#'+$form.attr('id')+' .wcfm-message').html('<span class="wcicon-status-cancelled"></span>'+$(this).data('required_message')).addClass('wcfm-error').slideDown();else $('#'+$form.attr('id')+' .wcfm-message').append('<br /><span class="wcicon-status-cancelled"></span>'+$(this).data('required_message'));$wcfm_is_valid_form=!1;$(this).removeClass('wcfm_validation_success').addClass('wcfm_validation_failed')}}}}});$form.find('.wcfm_wpeditor_required').each(function(){$data_id=$(this).attr('id');$data_name=$(this).attr('name');$form=$(this).parents('form');if($.inArray($data_name,$proccessed_required_fileds)===-1){$proccessed_required_fileds.push($data_name);if(!$(this).parents('.wcfm-container').hasClass('wcfm_block_hide')&&!$(this).parents('.wcfm-container').hasClass('wcfm_custom_hide')&&!$(this).parent().parent().hasClass('wcfm_block_hide')&&!$(this).parent().parent().hasClass('wcfm_custom_hide')&&!$(this).parent().hasClass('wcfm_block_hide')&&!$(this).parent().hasClass('wcfm_custom_hide')&&!$(this).hasClass('wcfm_ele_hide')&&!$(this).hasClass('wcfm_custom_hide')){$data_val=wcfmstripHtml(getWCFMEditorContent($data_id));if($data_val.length==1){if($wcfm_is_valid_form)
$('#'+$form.attr('id')+' .wcfm-message').html('<span class="wcicon-status-cancelled"></span>'+wcfmcapitalizeFirstLetter($data_name)+": "+wcfm_core_dashboard_messages.required_message).addClass('wcfm-error').slideDown();else $('#'+$form.attr('id')+' .wcfm-message').append('<br /><span class="wcicon-status-cancelled"></span>'+wcfmcapitalizeFirstLetter($data_name)+": "+wcfm_core_dashboard_messages.required_message);$wcfm_is_valid_form=!1}}}});if(!$wcfm_is_valid_form){wcfmMessageHide()}}});var messageCountRefrsherTime='';function messageCountRefrsher(){clearTimeout(messageCountRefrsherTime);messageCountRefrsherTime=setTimeout(function(){var data={action:'wcfm_message_count'}
jQuery.ajax({type:'POST',url:wcfm_params.ajax_url,data:data,success:function(response){$response_json=$.parseJSON(response);if($response_json.status){if($response_json.notice){$('.notice_count').text($response_json.notice)}
if($response_json.message){$('.message_count').text($response_json.message);if(wcfm_params.wcfm_is_desktop_notification){getNewMessageNotification($response_json.message)}}
if($response_json.enquiry){$('.enquiry_count').text($response_json.enquiry)}}else{if($response_json.redirect){window.location=$response_json.redirect}}}});messageCountRefrsher()},59000)}
if(wcfm_params.wcfm_is_allow_wcfm){messageCountRefrsher()}
var notificationRefrsherTime='';function getNewMessageNotification(message_count){message_count=parseInt(message_count);var unread_message=parseInt(wcfm_params.unread_message);if(message_count>unread_message){clearTimeout(notificationRefrsherTime);$('.wcfm_notification_wrapper').slideDown(function(){$('.wcfm_notification_wrapper').remove()});var data={action:'wcfm_message_notification',limit:(message_count-unread_message)}
jQuery.ajax({type:'POST',url:wcfm_params.ajax_url,data:data,success:function(response){if(response){wcfm_params.unread_message=message_count;$('body').append(response);wcfm_desktop_notification_sound.play();notificationRefrsherTime=setTimeout(function(){$('.wcfm_notification_wrapper').slideDown(function(){$('.wcfm_notification_wrapper').remove()})},60000);$('.wcfm_notification_close').click(function(){clearTimeout(notificationRefrsherTime);$('.wcfm_notification_wrapper').slideDown(function(){$('.wcfm_notification_wrapper').remove()})})}}})}}
$(".wcfm_tutorials").colorbox({iframe:!0,width:$popup_width,innerHeight:390});$(".wcfm_linked_images").colorbox({iframe:!0,width:$popup_width,innerHeight:390});$(".wcfm_linked_attached").colorbox({iframe:!0,width:$large_popup_width,innerHeight:390});if(wcfm_params.wcfm_is_allow_external_product_analytics){$('.product_type_external').each(function(){$(this).click(function(event){event.preventDefault();$product_id=$(this).data('product_id');$href=$(this).attr('href');$is_blank=$(this).attr('target');var data={action:'wcfm_store_external_product_view_update',product_id:$product_id}
jQuery.ajax({type:'POST',url:wcfm_params.ajax_url,data:data,success:function(response){if(typeof $is_blank!==typeof undefined&&$is_blank!==!1){window.open($href,'_blank')}else{window.location=$href}}}).always(function(data){})})})}
setTimeout(function(){$('.wcfm_datepicker').each(function(){if(!$(this).hasClass('hasDatepicker')){$dateFormat=$(this).data('date_format');if(!$dateFormat)$dateFormat=wcfm_datepicker_params.dateFormat;$(this).datepicker({dateFormat:$dateFormat,closeText:wcfm_datepicker_params.closeText,currentText:wcfm_datepicker_params.currentText,monthNames:wcfm_datepicker_params.monthNames,monthNamesShort:wcfm_datepicker_params.monthNamesShort,dayNames:wcfm_datepicker_params.dayNames,dayNamesShort:wcfm_datepicker_params.dayNamesShort,dayNamesMin:wcfm_datepicker_params.dayNamesMin,firstDay:wcfm_datepicker_params.firstDay,isRTL:wcfm_datepicker_params.isRTL,changeMonth:!0,changeYear:!0})}});$('.wcfm_datetimepicker').each(function(){$dateFormat=$(this).data('date_format');if(!$dateFormat)$dateFormat=wcfm_datepicker_params.dateFormat;$(this).datetimepicker({dateFormat:$dateFormat,closeText:wcfm_datepicker_params.closeText,currentText:wcfm_datepicker_params.currentText,monthNames:wcfm_datepicker_params.monthNames,monthNamesShort:wcfm_datepicker_params.monthNamesShort,dayNames:wcfm_datepicker_params.dayNames,dayNamesShort:wcfm_datepicker_params.dayNamesShort,dayNamesMin:wcfm_datepicker_params.dayNamesMin,firstDay:wcfm_datepicker_params.firstDay,isRTL:wcfm_datepicker_params.isRTL,timeFormat:'h:mm tt',changeMonth:!0,changeYear:!0})});$('.wcfm_timepicker').each(function(){$(this).timepicker({timeFormat:'h:mm tt',})})},500)});function wcfmstripHtml(html){var temporalDivElement=document.createElement("div");temporalDivElement.innerHTML=html;return temporalDivElement.textContent||temporalDivElement.innerText||""}
function wcfmcapitalizeFirstLetter(string){return string.charAt(0).toUpperCase()+string.slice(1)}
var audio=new Audio(wcfm_notification_sound);var wcfm_notification_sound=new Audio(wcfm_notification_sound);var wcfm_desktop_notification_sound=new Audio(wcfm_desktop_notification_sound)