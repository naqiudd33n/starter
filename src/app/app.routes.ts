import { Routes } from '@nestjs/core';

export const appRoutes: Routes = [
    {
        path: 'api',
        children: [{ path: 'hello' }, { path: 'database' }],
    },
];
