import React, { useEffect, useState } from 'react';
import MedicineCard from './MedicineCard';
import medicinesData from '../data/medicines.json';

export default function MedicineList({ category }) {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    const all = medicinesData;
    if (category) setMedicines(all.filter(m => m.category === category));
    else setMedicines(all);
  }, [category]);

  if (!medicines.length) {
    return <div style={{padding:20, color:'#475569'}}>No medicines found in this category.</div>;
  }

  return (
    <div className="medicine-grid">
      {medicines.map(m => <MedicineCard key={m.id} medicine={m} />)}
    </div>
  );
}
