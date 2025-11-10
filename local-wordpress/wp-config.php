<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'database_name_here' );

/** Database username */
define( 'DB_USER', 'username_here' );

/** Database password */
define( 'DB_PASSWORD', 'password_here' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'put your unique phrase here' );
define( 'SECURE_AUTH_KEY',  'put your unique phrase here' );
define( 'LOGGED_IN_KEY',    'put your unique phrase here' );
define( 'NONCE_KEY',        'put your unique phrase here' );
define( 'AUTH_SALT',        'put your unique phrase here' );
define( 'SECURE_AUTH_SALT', 'put your unique phrase here' );
define( 'LOGGED_IN_SALT',   'put your unique phrase here' );
define( 'NONCE_SALT',       'put your unique phrase here' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
define('AUTH_KEY',         '+*b{OSDI++]@fj@Wb+Vof5f@12spaBR2IS!{6%6u:g8h&nVN$%nUUYMGJ+<IcE {');
define('SECURE_AUTH_KEY',  '21Xi8(2Z*RF8k|fi2kTu<Q*oqBIk|;SEh+M<(*;d#:svq~WNL.dFG.IWwn@3qhB+');
define('LOGGED_IN_KEY',    'NJ}1~?e)%2MPSl,,|K[3r^E1:^yZ{Gfz1a><<yLz+3h8b$X0s|.<b=b/`Wp~y:{+');
define('NONCE_KEY',        'e?%]IYg^+XPM[#gh%cKQ,fW[&H 6-0M]kg8zQ:|n+7[[otrN!)5BqhLD0>N8awAR');
define('AUTH_SALT',        'j4QK9 ~H,t9cx;zo{|lilnX|3i^3;[.$D:D*|/|ypIT*O^s3xAO1~ZKlf*9}6>DT');
define('SECURE_AUTH_SALT', 'YfEs3S*Pk3BUZBZrD_PVN_Lb5atWo]|d;@v@.stIrn|jdF:l*JJA;8sh`<M-uB0D');
define('LOGGED_IN_SALT',   'jwGnhBXr.-s6:GJ?*N?R*&Fl6_|1kRoD!jTVl[(vS8Tz|Lu1UN+(%r>LzjOnLB>f');
define('NONCE_SALT',       'mP#xMF:lM!0aT(<i61$t1QJ,G*nlk(}c57tW&X>exoOD@%O{igY^@gu:{:QchH<#');

// Use SQLite database
define('DB_NAME', 'wordpress');
define('DB_USER', 'root');
define('DB_PASSWORD', '');
define('DB_HOST', 'localhost');

// For development
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
