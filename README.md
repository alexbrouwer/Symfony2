Symfony
=======


1) Installing
-------------

    $ APACHEUSER=`ps aux | grep -E '[a]pache|[h]ttpd|[_]www|[w]ww-data' | grep -v root | head -1 | cut -d\  -f1`
    $ sudo setfacl -R -m u:"$APACHEUSER":rwX -m u:`whoami`:rwX app/cache app/logs
    $ sudo setfacl -dR -m u:"$APACHEUSER":rwX -m u:`whoami`:rwX app/cache app/logs

1) Includes
-----------

## Bundles
 - [Doctrine Data Fixtures](https://github.com/doctrine/DoctrineFixturesBundle)
 - [LiipMonitorBundle](https://github.com/liip/LiipMonitorBundle) (System health checks)
 - [JMSSecurityExtraBundle](http://jmsyst.com/bundles/JMSSecurityExtraBundle) (Security enhancements)
 - [AlexAsseticExtraBundle](https://github.com/alexandresalome/assetic-extra-bundle) (Asset directory for assets)
 - [WebProfilerExtraBundle](https://github.com/Elao/WebProfilerExtraBundle) (DEV ONLY: Adds routing, container,
 twig and assetic to web profiler)
 - [EguliasListenersDebugCommandBundle](https://github.com/egulias/ListenersDebugCommandBundle) (DEV ONLY: Adds command to debug container listeners)
 - [JMSCommandBundle](http://jmsyst.com/bundles/JMSCommandBundle) (DEV ONLY: Adds commands for ease of development)
 - [JMSTranslationBundle](http://jmsyst.com/bundles/JMSTranslationBundle) (DEV ONLY: Adds tools for translations)

## Composer

- [CheckBundles](https://github.com/wjzijderveld/CheckBundles) (Verifies bundles exist in AppKernel)