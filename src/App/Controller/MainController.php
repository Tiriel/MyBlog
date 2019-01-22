<?php

declare(strict_types=1);
/**
 * Created by PhpStorm.
 * User: benjamin
 * Date: 22/01/19
 * Time: 23:03.
 */

namespace App\Controller;

use Lib\Controller\DefaultController;

class MainController extends DefaultController
{
    public function indexAction()
    {
        return $this->render('index.html.twig', []);
    }
}
