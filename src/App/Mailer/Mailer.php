<?php

namespace App\Mailer;

use App\Form\Form;
use Lib\Templating\Templater;
use Symfony\Component\Mailer\Exception\TransportException;
use Symfony\Component\Mailer\Mailer as BaseMailer;
use Symfony\Component\Mailer\Transport;
use Symfony\Component\Mime\Email;

class Mailer
{
    private const TO_ADDRESS = "benjamin.zaslavsky@gmail.com";

    private const FROM_ADDRESS = "noreply@benjaminzaslavsky.fr";

    private BaseMailer $mailer;

    private Templater $templater;

    public function __construct(Templater $templater)
    {
        $this->mailer = new BaseMailer(Transport::fromDsn(getenv('MAILER_DSN')));
        $this->templater = $templater;
    }

    public function sendFormMail(Form $form): bool
    {
        $message = (new Email())
            ->addFrom(self::FROM_ADDRESS)
            ->addTo(self::TO_ADDRESS)
            ->html($this->templater->render('mail/'.$form->name, ['data' => $form->data]))
        ;
        try {
            $this->mailer->send($message);
        } catch (TransportException $exception) {
            return false;
        }
        return true;
    }
}