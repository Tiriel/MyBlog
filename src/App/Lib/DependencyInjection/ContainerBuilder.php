<?php

namespace App\Lib\DependencyInjection;

class ContainerBuilder
{
    protected $config;

    protected $container;

    public function __construct(array $config)
    {
        $this->config = $config;
    }

    public function compile()
    {
        return null;
    }
}
