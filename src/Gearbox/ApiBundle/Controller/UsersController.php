<?php


namespace Gearbox\ApiBundle\Controller;

use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Routing\ClassResourceInterface;

class UsersController extends FOSRestController implements ClassResourceInterface
{
    public function cgetAction()
    {
        $rep = $this->getDoctrine()->getRepository('GearboxApiBundle:User');

        $users = $rep->findAll();

        return array('users' => $users);
    }
} 