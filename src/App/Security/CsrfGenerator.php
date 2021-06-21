<?php

namespace App\Security;

class CsrfGenerator
{
    /**
     * Inspired by Symfony 5 CsrfTokenGenerator
     * @return string
     * @throws \Exception
     */
    public static function generateToken(): string
    {
       return rtrim(strtr(base64_encode(bin2hex(random_bytes(32))), '+/', '-_'), '=');
    }
}