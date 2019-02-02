<?php

declare(strict_types=1);

namespace Lib\Templating;

class Templater
{
    protected $twigEnv;
    protected $twigLoader;

    public function __construct()
    {
        $this->twigLoader = new \Twig_Loader_Filesystem(getenv('APP_ROOT').'/templates');
        $this->twigEnv = new \Twig_Environment($this->twigLoader);
    }

    public function render(string $file, array $params = []): string
    {
        return $this->twigEnv->render($file, $params);
    }
}
