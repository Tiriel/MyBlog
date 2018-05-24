<?php

namespace Tests\Lib\Routing;

use Lib\Http\Request;
use Lib\Routing\RouteLoader;
use Lib\Routing\Router;
use Lib\Routing\UrlMatcher;
use PHPUnit\Framework\TestCase;

class RouterTest extends TestCase
{
    public function testMatcherIsCalled()
    {
        $matcher = $this
            ->getMockBuilder(UrlMatcher::class)
            ->disableOriginalConstructor()
            ->disableOriginalClone()
            ->disallowMockingUnknownTypes()
            ->setMethods(['match'])
            ->getMock();
        $loader = $this
            ->getMockBuilder(RouteLoader::class)
            ->disableOriginalConstructor()
            ->disableOriginalClone()
            ->disallowMockingUnknownTypes()
            ->getMock();

        $router = new Router($loader, $matcher);

        $matcher->expects($this->once())->method('match');

        $router->route(new Request());
    }
}