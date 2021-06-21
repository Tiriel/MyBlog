<?php

declare(strict_types=1);

namespace Lib\Templating;

use Twig\Environment;
use Twig\Loader\FilesystemLoader;

class Templater
{
    protected $twigEnv;
    protected $twigLoader;

    public function __construct()
    {
        $this->twigLoader = new FilesystemLoader(getenv('APP_ROOT').'/templates');
        $this->twigEnv = new Environment($this->twigLoader);
    }

    public function render(string $file, array $params = []): string
    {
        return $this->twigEnv->render($file, $params);
    }
}
