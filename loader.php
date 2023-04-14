<?php
/*
Plugin Name: Vibe Boilerplate
Plugin URI: https://vibethemes.com
Description: Build custom modile for Vibe App
Version: 1.0
Author: VibeThemes
Author URI: http://www.vibethemes.com
License: GPL3 ( https://www.gnu.org/licenses/gpl-3.0.en.html , Use or Modify, Copy & distribution not allowed.)
Text Domain: vibe-boilerplate
*/
/*= All open source attempts fail when our projects are copied even before the release. Please support the projects. =*/

if ( ! defined( 'ABSPATH' ) ) exit;

//set this version once your javascript is finalised, to avoid browser caching
define( 'VIBE_BOILERPLATE_VERSION', rand(0,9999));

define( 'VIBE_BOILERPLATE_API_NAMESPACE', 'vibeboilerplate/v1'  );

include_once 'includes/class.init.php';
include_once 'includes/class.api.php';


