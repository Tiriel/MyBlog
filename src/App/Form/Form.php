<?php

namespace App\Form;

class Form
{
    public string $name;

    public iterable $csrfToken;

    public iterable $data;

    public function __construct(string $name, iterable $csrfToken)
    {
        $this->name = $name;
        $this->csrfToken = $csrfToken;
    }

    public static function create(string $name, iterable $csrf): self
    {
        return new self($name, $csrf);
    }
}