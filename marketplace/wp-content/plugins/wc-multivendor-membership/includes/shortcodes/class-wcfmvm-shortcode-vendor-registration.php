<?php
/**
 * WCFMvm plugin shortcode
 *
 * Plugin Registration Shortcode output
 *
 * @author 		WC Lovers
 * @package 	wcfmvm/includes/shortcode
 * @version   1.2.0
 */
 
class WCFM_Vendor_Registration_Shortcode {
	
	public function __construct() {
		
	}

	/**
	 * Output the WC Frontend Manager Registration shortcode.
	 *
	 * @access public
	 * @param array $atts
	 * @return void
	 */
	static public function output( $attr ) {
		global $WCFM, $WCFMvm, $wp, $WCFM_Query;
		$WCFM->nocache();
		
		echo '<div id="wcfm-main-contentainer"> <div id="wcfm-content"><div class="wcfm-membership-wrapper"> ';
		
		if ( isset( $wp->query_vars['page'] ) || is_wcfm_registration_page() ) {
			echo "<h2>" . __( "Registration", "wc-multivendor-membership" ) . "</h2>";
			if( !wcfm_is_vendor() && ( wcfm_is_allowed_membership() || current_user_can( 'administrator' ) ) ) {
				$application_status = '';
				if( is_user_logged_in() ) {
					$member_id = apply_filters( 'wcfm_current_vendor_id', get_current_user_id() );
					$application_status = get_user_meta( $member_id, 'wcfm_membership_application_status', true );
				}
				
				if( $application_status && ( $application_status == 'pending' ) ) {
					$WCFMvm->template->get_template('vendor_thankyou.php');
				} else {
					if( ($wcfm_free_membership = get_wcfm_free_membership()) && apply_filters( 'wcfmvm_is_allow_by_default_free_registration', true ) ) {
						// Session store
						$_SESSION['wcfm_membership']['membership'] = $wcfm_free_membership;
						$_SESSION['wcfm_membership']['free_registration'] = $wcfm_free_membership;
					} else {
						// Session store
						$_SESSION['wcfm_membership']['membership'] = -1;
						$_SESSION['wcfm_membership']['free_registration'] = -1;
					}
					$WCFMvm->template->get_template('vendor_registration.php');
				}
			} else {
				$WCFMvm->template->get_template( 'vendor_membership_block.php' );
			}
		}
		
		echo '</div></div></div>';
	}
}
