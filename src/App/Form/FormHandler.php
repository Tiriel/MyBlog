<?php

namespace App\Form;

use App\Security\CsrfTokenStorage;
use Lib\Http\Request;

class FormHandler
{
    public static function handleForm(Form $form, Request $request): bool
    {
        $storedToken = CsrfTokenStorage::getToken($form->name);
        $sentToken = $request->request->get($form->name) ?? $request->request->get($form->name)['csrf_token'];

        return $storedToken && $sentToken === $storedToken['hash'] && $storedToken['expiration'] <= time();
    }
}