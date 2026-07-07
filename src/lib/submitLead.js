export async function submitLead(form, source) {
  const now = new Date()

  await fetch('https://tenziaa.com/api/email.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: form.name.value,
      email: '-',
      phone: form.mobile.value,
      city: form.city.value,
      date: form.date.value || now.toISOString().split('T')[0],
      time: form.time.value,
      treatment: '-',
      message: '-',
      source,
    }),
  })
}
