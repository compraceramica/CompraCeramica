<?php
define('WP_CACHE', true);
define( 'WPCACHEHOME', '/var/www/vhosts/compraceramica.com/httpdocs/wp-content/plugins/wp-super-cache/' );
define('WP_AUTO_UPDATE_CORE', false);// This setting is required to make sure that WordPress updates can be properly managed in WordPress Toolkit. Remove this line if this WordPress instance is not managed by WordPress Toolkit anymore.
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp_g87w9' );

/** MySQL database username */
define( 'DB_USER', 'wp_hl8cq' );

/** MySQL database password */
define( 'DB_PASSWORD', 'c3n4JD_2Pq' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost:3306' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', 'T2uo1yBAP63&@WQ8*-35[[5uV-17f&;6;6a@61;*r7P~xue)z~996c2#22hLov:U');
define('SECURE_AUTH_KEY', 'M/3&96F0XKM8:2g834LAB~L8u%2k1q-wPya422VmSTuq:8q%3Te@r0ADS(80;2]3');
define('LOGGED_IN_KEY', '*L)PDgC2wKf45@I6r;4@8;Kneb70%*+890s:4jh7F;dn5gn0V25l7F2nr5%7nf([');
define('NONCE_KEY', 'gDnaX86!@3lO0h+%Zw#R!1z8+!%Q+T~_HoYz&89T!MCImc+1_X%:bWD74)U)_4;x');
define('AUTH_SALT', '0073rd1!e3p2;62CZ*FBNFjb|1h~IkA:x&D0DI5K5BU8d1!lP@5LjD1Uk0KG(RF#');
define('SECURE_AUTH_SALT', '1aUQUH2a7e9-7axn6w&u[3OTV96y5_4IQ5TTN5%M9Vt&g&hH/QYYV8JoLV6l&wZ*');
define('LOGGED_IN_SALT', '4vC)/]9UI+!5;7~FrV6t%p63s4(B+|aK5~AdG:8ZP]&SjT7)0SFK|u&K3%rsZ%!Q');
define('NONCE_SALT', '5sILeP:KHF6qz0D0w!vWAKoq07+UOF~5Te5!7xo7epKi11i#709q/RZNh4d3aZ+t');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = '5fN88Swd_';


define('WP_ALLOW_MULTISITE', true);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) )
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
