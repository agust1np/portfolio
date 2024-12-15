import { User, FileText, Shell32167, Mail, Write1 } from '@react95/icons';
import { FC } from 'react';

type IconComponent = FC<{
  variant?: '32x32_1' | '32x32_4' | '16x16_4';
}>;

export interface DesktopIconData {
  id: string;
  label: string;
  Icon: IconComponent;
}

export const desktopIcons: DesktopIconData[] = [
  {
    id: 'about',
    label: 'About Me',
    Icon: User as IconComponent
  },
  {
    id: 'projects',
    label: 'Projects',
    Icon: FileText as IconComponent
  },
  {
    id: 'skills',
    label: 'Skills',
    Icon: Shell32167 as IconComponent
  },
  {
    id: 'contact',
    label: 'Contact',
    Icon: Mail as IconComponent
  },
  {
    id: 'blog',
    label: 'Blog',
    Icon: Write1 as IconComponent
  },
];