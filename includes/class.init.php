<?php
/**
 * API\
 *
 * @class       Vibe_Boilerplate_Init
 * @author      VibeThemes
 * @category    Init
 * @package     Boilerplate
 * @version     1.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


class Vibe_Boilerplate_Init{


	public static $instance;
	public static function init(){

        if ( is_null( self::$instance ) )
            self::$instance = new Vibe_Boilerplate_Init();
        return self::$instance;
    }

	private function __construct(){

		add_action('wp_enqueue_scripts',array($this,'enqueue_script'),100);
        add_action( 'bp_setup_nav', array($this,'add_boilerplate_tab'), 101 );

        add_filter('vibebp_component_icon',array($this,'set_icon'),100,2);
	}

    // Icon for Profile menu https://prnt.sc/w34x2p
	function set_icon($icon,$component_name){

		if($component_name == 'vibe_boilerplate'){  // Defined BP Component
            return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 16c0 1.104-.896 2-2 2h-12c-1.104 0-2-.896-2-2v-8c0-1.104.896-2 2-2h12c1.104 0 2 .896 2 2v8zm8-10l-6 4.223v3.554l6 4.223v-12z"/></svg>';
        }
        return $icon;
    }

    // Tab in profile. Register BuddyPress navigation items : https://prnt.sc/w34xhn
    function add_boilerplate_tab(){

        global $bp;
            
        if(function_exists('is_wplms_4_0') && is_wplms_4_0()){
            $slug = 'vibe_boilerplate'; // Defined BP Component
            bp_core_new_nav_item( array( 
                'name' => __('Vibe Boilerplate','vibe-boilerplate'),
                'slug' => $slug, 
                'item_css_id' => 'vibe_boilerplate',
                'screen_function' => array($this,'show_screen'),
                'default_subnav_slug' => 'maintab', 
                'position' => 58,
                'show_for_displayed_user'=>false,
                'user_has_access' => (bp_is_my_profile() || current_user_can('manage_options'))
            ) );
            
            bp_core_new_subnav_item( array(
                'name'        => __('Main Tab 1','vibe-boilerplate'),
                'slug'        => 'maintab',
                'parent_slug' => $slug,
                'parent_url' => $bp->displayed_user->domain.$slug.'/',
                'screen_function' => array($this,'show_screen'),
                'user_has_access' => true
            ) );

            bp_core_new_subnav_item( array(
                'name'        => __('SubTab 2','vibe-boilerplate'),
                'slug'        => 'subtab2',
                'parent_slug' => $slug,
                'parent_url' => $bp->displayed_user->domain.$slug.'/',
                'screen_function' => array($this,'show_screen'),
                'user_has_access' => (bp_is_my_profile() || current_user_can('manage_options'))
            ) );
        }
    }

    function show_screen(){} //function required for BuddyPress handling but should not be anonymous function. We handle it via react & API Calls

    function enqueue_script(){

        $blog_id = ''; //for multi site compatibility
        if(function_exists('get_current_blog_id')){
            $blog_id = get_current_blog_id();
        }
        //This array could be of any format
        $boilerplate=apply_filters('vibe_boilerplate_script_args',array(
            'api'=>array(
                'url'=>get_rest_url($blog_id,VIBE_BOILERPLATE_API_NAMESPACE),
            ),
            'settings'=>array(
                'timestamp'=>time(),
            ),
            'translations'=>array(
                'title'=>__('Vibe Boilerplate', 'vibe-blog'),
            )
        ));

        //Enqueue this script only on Single user page or Profile page if Global login
        $enqueue = false;
        if(function_exists('bp_is_user') && bp_is_user()){
            $enqueue = true;
        }
        if(apply_filters('vibebp_enqueue_profile_script',$enqueue)){ // BP Single page handling

            wp_enqueue_script('vibeboilerplate',plugins_url('../assets/js/vibe-boilerplate.js',__FILE__),array('wp-element','wp-data'),VIBE_BOILERPLATE_VERSION);
            wp_localize_script('vibeboilerplate','vibeboilerplate',$boilerplate);
            wp_enqueue_style('vibe-boilerplate',plugins_url('../assets/css/vibe-boilerplate.css',__FILE__),array(),VIBE_BOILERPLATE_VERSION);
        }
    }
}

Vibe_Boilerplate_Init::init();
