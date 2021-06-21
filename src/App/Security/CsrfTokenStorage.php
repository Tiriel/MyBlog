<?php


namespace App\Security;


class CsrfTokenStorage
{
    private const TOKEN_LIFETIME_HOURS = '2';

    public static function getToken(?string $tokenId)
    {
        if (isset($_SESSION[$tokenId])) {
            return $_SESSION[$tokenId];
        }
        return $_SESSION[$tokenId] = [
            'hash' => CsrfGenerator::generateToken(),
            'expiration' => time() + (self::TOKEN_LIFETIME_HOURS * 60 * 60)
        ];
    }
}