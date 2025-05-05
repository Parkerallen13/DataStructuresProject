import { AppShell, Text, Burger, Group, Skeleton } from '@mantine/core';
import HeaderButtons from './HeaderButtons';
import { useDisclosure } from '@mantine/hooks';
import TableExample from './TableExample';

export default function AppShellExample() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 250,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header style={{ backgroundColor: "#f0f8ff" }}>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Text fz="xl" fw={600}>Header</Text>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md" style={{ backgroundColor: "#ffe4e1" }}>
        <HeaderButtons />
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false} />
          ))}
      </AppShell.Navbar>

      <AppShell.Main style={{ backgroundColor: "#f5f5dc" }}>
        <Text fz="xl" fw={600}>Dashboard</Text>
        <Text mt="md">Welcome to your dashboard layout!</Text>
        <TableExample />
      </AppShell.Main>
    </AppShell>
  );
}