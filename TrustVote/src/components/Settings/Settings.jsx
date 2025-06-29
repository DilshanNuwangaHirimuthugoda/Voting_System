import React from 'react';
import SystemSettings from './SystemSettings';
import SecuritySettings from './SecuritySettings';

const Settings = () => {
  return (
    <div className="space-y-6">
      <SystemSettings />
      <SecuritySettings />
    </div>
  );
};

export default Settings;