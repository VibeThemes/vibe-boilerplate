<?php
/**
 * API\
 *
 * @class       Vibe_Boilerplate_API
 * @author      VibeThemes
 * @category    API
 * @package     Boilerplate
 * @version     1.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


class Vibe_Boilerplate_API{


	public static $instance;
	public static function init(){

        if ( is_null( self::$instance ) )
            self::$instance = new Vibe_Boilerplate_API();
        return self::$instance;
    }

	private function __construct(){

		add_action('rest_api_init',array($this,'register_api_endpoints'));
	}


	function register_api_endpoints(){

		register_rest_route( VIBE_BOILERPLATE_API_NAMESPACE, '/endpoint', array(
            array(
                'methods'             =>  'POST',
                'callback'            =>  array( $this, 'get_endpoint' ),
                'permission_callback' => array( $this, 'user_permissions_check' ),
            ),
        ));
    }

    function user_permissions_check($request){
        
        $body = json_decode($request->get_body(),true);

        if(!empty($body['token'])){
            $this->user = apply_filters('vibebp_api_get_user_from_token','',$body['token']);
            if(!empty($this->user)){
                return true;
            }
        }

        return false;
    }

    function get_endpoint(){

        //do all the processing here, $this->user is the user object
        $return = array(
            'status'=>1,
            'user'=>$this->user
        );
        return new WP_REST_Response($return, 200);
    }
}

Vibe_Boilerplate_API::init();
