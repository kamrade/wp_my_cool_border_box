<?php

/**
* Plugin Name: My Cool Border Box
* Author: Dennis Mikhailov
* Version: 0.0.1
*/

function load_my_block_files() {
  wp_enqueue_script(
    'my-super-unique-handle',
    plugin_dir_url(__FILE__) . 'my-block.js',
    array('wp-blocks', 'wp-i18n', 'wp-editor'),
    true
  );
}

add_action('enqueue_block_editor_assets', 'load_my_block_files');

?>