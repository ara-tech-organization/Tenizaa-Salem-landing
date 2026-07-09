export async function submitLead(form, source) {
  const now = new Date()

  await fetch('https://salem.tenziaa.com/api/email.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: form.name.value,
      city: form.city.value,
      phone: form.mobile.value,
      date: form.date.value || now.toISOString().split('T')[0],
      source,
    }),
  })
}
