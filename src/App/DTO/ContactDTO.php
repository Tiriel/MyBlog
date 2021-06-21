<?php

namespace App\DTO;

class ContactDTO implements DTOInterface
{
    private string $firstname;

    private string $lastname;

    private string $email;

    private string $message;

    public function getFirstname(): string
    {
        return $this->firstname;
    }

    public function setFirstname(string $firstname): ContactDTO
    {
        $this->firstname = $firstname;
        return $this;
    }

    public function getLastname(): string
    {
        return $this->lastname;
    }

    public function setLastname(string $lastname): ContactDTO
    {
        $this->lastname = $lastname;
        return $this;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function setEmail(string $email): ContactDTO
    {
        $this->email = $email;
        return $this;
    }

    public function getMessage(): string
    {
        return $this->message;
    }

    public function setMessage(string $message): ContactDTO
    {
        $this->message = $message;
        return $this;
    }
}