<?php

namespace App\Controller;

use App\Form\Form;
use App\Form\FormHandler;
use App\Security\CsrfTokenStorage;
use Lib\Controller\DefaultController;
use Lib\Http\Request;
use Psr\Http\Message\ResponseInterface;

class BlogFrontController extends DefaultController
{
    public function blogIndexAction(Request $request): ResponseInterface
    {
        $form = Form::create('contact_form', CsrfTokenStorage::getToken('contact_form'));

        if (FormHandler::handleForm($form, $request)) {
            $this->getMailer()->sendFormMail($form);
            // addFlash
        }
        return $this->render('blog/index.html.twig', ['form' => $form]);
    }
}