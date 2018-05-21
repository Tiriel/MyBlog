<?php

namespace App\Lib\DependencyInjection;

class Container
{
    protected $isCompiled = false;

    protected $lifetime = 0;

    protected $createdAt = '';

    protected $services = [];

    public function __construct($lifetime)
    {
        $this->lifetime  = $lifetime;
        $this->createdAt = time();
    }

    public function addService($param)
    {
        return null;
    }
}
