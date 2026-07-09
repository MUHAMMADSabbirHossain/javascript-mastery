import React from "react";

const UserDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <div>
      <h1>Showing UserDetails #{id}</h1>
    </div>
  );
};

export default UserDetails;
