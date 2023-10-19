// @react-server/client

import Image from 'next/image';
import React from 'react';
import Map from '@/components/Map/Map';
import { GeneralLayout } from '@/layouts';
import styles from "@/components/contact/contact.module.css";
import Contact from '@/components/contact/Contact';

const DEFAULT_CENTER = [-11.938837909055202, -76.69711947815475]


function ContactPage() {
  return (
    <GeneralLayout>
    <Contact></Contact>
    </GeneralLayout>
  )
}

export default ContactPage