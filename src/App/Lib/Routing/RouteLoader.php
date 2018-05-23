<?php

namespace App\Lib\Routing;

use Symfony\Component\Yaml\Parser;

class RouteLoader
{
    /**
     * @var string
     */
    private $rootDir;
    /**
     * @var string
     */
    private $routeFile;

    /**
     * @var Parser
     */
    private $parser;

    public function __construct(string $path = null)
    {
        $path = $path ?? '/config/routes.yml';
        list($scriptName) = get_included_files();

        $this->rootDir   = dirname(realpath($scriptName));
        $this->routeFile = "{$this->rootDir}{$path}";
        $this->parser    = new Parser();
    }

    public function loadRoutes()
    {
        $routes    = new RouteCollection();
        $routesArr = $this->parser->parseFile($this->routeFile);

        foreach ($routesArr as $name => $row) {
            $path         = $row['path'];
            $requirements = $row['requirements'] ?? [];
            $defaults     = $row['defaults'] ?? [];
            $auth         = $row['auth'] ?? false;
            $params       = $row['params'] ?? [];

            $route = new RouteDefinition($name, $path, $requirements, $defaults, $auth, $params);
            $routes->add($name, $route);
        }

        return $routes;
    }
}